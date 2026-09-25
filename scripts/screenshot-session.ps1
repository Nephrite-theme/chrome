# Opens a clean Chrome window with one Nephrite flavor loaded, sized for
# consistent screenshots. Uses a throwaway profile, so your own Chrome,
# tabs and extensions are never touched.
#
# Usage:
#   .\scripts\screenshot-session.ps1 -Flavor Forest
#   .\scripts\screenshot-session.ps1 -Flavor Jade -Channel Stable -Scale 2
param(
	[ValidateSet("Forest", "Jade", "Mint")]
	[string]$Flavor = "Forest",
	[ValidateSet("Dev", "Stable", "Beta", "Canary")]
	[string]$Channel = "Dev",
	# 1.25 fits a 1080p screen: 1280x800 window -> 1600x1000 capture.
	# Use 2 on a 1440p or 4K screen for a 2560x1600 capture.
	[double]$Scale = 1.25,
	[int]$Width = 1280,
	[int]$Height = 800
)

$folders = @{
	Stable = "Chrome"
	Beta   = "Chrome Beta"
	Dev    = "Chrome Dev"
	Canary = "Chrome SxS"
}
$candidates = @(
	"$env:ProgramFiles\Google\$($folders[$Channel])\Application\chrome.exe",
	"${env:ProgramFiles(x86)}\Google\$($folders[$Channel])\Application\chrome.exe",
	"$env:LOCALAPPDATA\Google\$($folders[$Channel])\Application\chrome.exe"
)
$chrome = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $chrome) {
	Write-Error "Chrome $Channel was not found. Looked in:`n$($candidates -join "`n")"
	exit 1
}

$theme = Resolve-Path (Join-Path $PSScriptRoot "..\themes\Nephrite $Flavor")
# One profile per flavor, so switching flavors never mixes themes.
$profileDir = Join-Path $env:TEMP "nephrite-shots-$($Flavor.ToLower())"

# Chrome no longer loads extensions from the command line in branded builds,
# so the theme is loaded once per profile from chrome://extensions; the
# profile keeps it for every later session.
$arguments = @(
	"--user-data-dir=`"$profileDir`"",
	"--force-device-scale-factor=$Scale",
	"--window-size=$Width,$Height",
	"--window-position=40,20",
	"--no-first-run",
	"--no-default-browser-check",
	"chrome://extensions",
	"https://github.com/Nephrite-theme"
)

Start-Process -FilePath $chrome -ArgumentList $arguments
Set-Clipboard -Value $theme.Path
Write-Host "Opened Chrome $Channel for Nephrite $Flavor (scale $Scale, $($Width)x$Height)."
Write-Host ""
Write-Host "First time with this flavor:"
Write-Host "  1. In chrome://extensions, turn on Developer mode (top right)."
Write-Host "  2. Click Load unpacked and paste the path (already in your clipboard):"
Write-Host "     $theme"
Write-Host "Later sessions reuse the profile, so the theme is already applied."

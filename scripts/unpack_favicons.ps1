param(
  [string]$ZipPath = "D:\favicon-pack.zip",
  [string]$OutDir = ""
)

if ([string]::IsNullOrWhiteSpace($OutDir)) {
  $OutDir = Join-Path $PSScriptRoot "..\public\favicons"
}

$OutDir = [System.IO.Path]::GetFullPath($OutDir)

if (-not (Test-Path $ZipPath)) {
  Write-Error "Zip file not found: $ZipPath"
  exit 1
}

if (-not (Test-Path $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir -Force | Out-Null
}

try {
  Expand-Archive -LiteralPath $ZipPath -DestinationPath $OutDir -Force
  Write-Host "Extracted $ZipPath -> $OutDir"
} catch {
  Write-Error "Failed to extract: $_"
  exit 1
}

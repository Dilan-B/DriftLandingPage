$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outDir = Join-Path $root "out"
$zipPath = Join-Path $root "drift-site.zip"

Set-Location $root
npm run build

if (-not (Test-Path $outDir)) {
  throw "Static export folder not found: $outDir"
}

if (Test-Path $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

Compress-Archive -Path (Join-Path $outDir "*") -DestinationPath $zipPath -Force

Write-Host "Created $zipPath"

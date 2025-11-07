# Fix Spectre mitigation issue in node-pty build files
$buildPath = Join-Path $PSScriptRoot "..\target\node_modules\node-pty\build"

if (Test-Path $buildPath) {
    Get-ChildItem -Path $buildPath -Filter "*.vcxproj" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $newContent = $content -replace '<SpectreMitigation>Spectre</SpectreMitigation>', '<SpectreMitigation>false</SpectreMitigation>'
        Set-Content -Path $_.FullName -Value $newContent
        Write-Host "Fixed Spectre mitigation in $($_.Name)"
    }
    Write-Host "All vcxproj files have been patched."
} else {
    Write-Host "Build directory not found. Run 'yarn install' first to generate the build files."
}

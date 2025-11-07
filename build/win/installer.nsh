!macro customInstall
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Nimbus" "" "Open &Nimbus here"
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Nimbus" "Icon" `"$appExe"`
  WriteRegStr HKCU "Software\Classes\Directory\Background\shell\Nimbus\command" "" `"$appExe" "%V"`

  WriteRegStr HKCU "Software\Classes\Directory\shell\Nimbus" "" "Open &Nimbus here"
  WriteRegStr HKCU "Software\Classes\Directory\shell\Nimbus" "Icon" `"$appExe"`
  WriteRegStr HKCU "Software\Classes\Directory\shell\Nimbus\command" "" `"$appExe" "%V"`

  WriteRegStr HKCU "Software\Classes\Drive\shell\Nimbus" "" "Open &Nimbus here"
  WriteRegStr HKCU "Software\Classes\Drive\shell\Nimbus" "Icon" `"$appExe"`
  WriteRegStr HKCU "Software\Classes\Drive\shell\Nimbus\command" "" `"$appExe" "%V"`
!macroend

!macro customUnInstall
  DeleteRegKey HKCU "Software\Classes\Directory\Background\shell\Nimbus"
  DeleteRegKey HKCU "Software\Classes\Directory\shell\Nimbus"
  DeleteRegKey HKCU "Software\Classes\Drive\shell\Nimbus"
!macroend

!macro customInstallMode
  StrCpy $isForceCurrentInstall "1"
!macroend

!macro customInit
  IfFileExists $LOCALAPPDATA\Nimbus\Update.exe 0 +2
  nsExec::Exec '"$LOCALAPPDATA\Nimbus\Update.exe" --uninstall -s'
!macroend

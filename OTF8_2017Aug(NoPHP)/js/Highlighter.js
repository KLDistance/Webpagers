function createExp(arry)
{
  var str="";
  for(var i=0;i<arry.length;i++)
  {
    if(i!=arry.length-1)
    {
      str=str+"("+arry[i]+")(?=[^a-zA-Z])"+"|";
    }
    else
    {
      str=str+"("+arry[i]+")";
    }
  }
  return "("+str+")";
}

function hightKey(key, id, color)
{
  var arr=null;
  var regStr=null;
  var content=null;
  var Reg=null;
  var newContent=null;
  var theObj=document.getElementById(id);
  var str1="<strong style='color:"
  var str2=";'>$1</strong>"
  arr=key.split(" ");
  regStr=createExp(arr);
  content=theObj.innerHTML;
  Reg=new RegExp(regStr,"g");
  var strCat = str1 + color + str2;
  return newContent=content.replace(Reg, strCat);
}

function HighLight(DemoCodeNum)
{
  var thediv = new Array();
  for(var i = 0; i < DemoCodeNum; i++)
  {
  	thediv[i] = document.getElementById("DemoCode" + (i+1));
  }
  
  var KEYWORD_NumTypes = "int float long short char double void BYTE WORD DWORD QWORD LPBYTE PBYTE LPWORD PWORD LPDWORD PDWORD LPQWORD PQWORD LRESULT HWND UINT WPARAM LPARAM MSG HINSTANCE HANDLE WNDCLASS WNDCLASSEX";
  var KEYWORD_Sturctures_Declarations = "if while for switch case default do static const extern return continue break unsigned typedef sizeof __cdecl __stdcall __fastcall";
  var KEYWORD_SystemFunctions = "main printf alloc realloc malloc memset memcpy strcpy strcat strstr strncpy strncat strlen DefWindowProc WinMain PostQuitMessage TranslateMessage DispatchMessage CreateWindow CreateWindowEx LoadCursor MoveWindow ShowWindow UpdateWindow RegisterClass RegisterClassEx UnregisterClass PeekMessage";
  var KEYWORD_Macros = "#include #define #ifdef #else #endif #pramga NULL VOID LPSTR LPVOID TRUE FALSE TEXT CS_HREDRAW CS_VREDRAW WS_OVERLAPPEDWINDOW WS_THICKFRAME WS_MAXIMIZEBOX WM_QUIT PM_REMOVE WM_DESTROY WM_COMMAND WM_INITDIALOG WM_LBUTTONUP WM_LBUTTONDOWN WM_KEYDOWN WM_KEYUP IDC_ARROW";
  
  for(var i = 0; i < DemoCodeNum; i++)
  {
  	thediv[i].innerHTML = hightKey(KEYWORD_Macros,"DemoCode" + (i+1), "RGB(200, 60, 250)");
    thediv[i].innerHTML = hightKey(KEYWORD_NumTypes,"DemoCode" + (i+1), "RGB(100, 230, 110)");
    thediv[i].innerHTML = hightKey(KEYWORD_Sturctures_Declarations,"DemoCode" + (i+1), "RGB(120, 130, 255)");
    thediv[i].innerHTML = hightKey(KEYWORD_SystemFunctions,"DemoCode" + (i+1), "RGB(255, 80, 80)");
  }
   
}

 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
___ _  _ ___ _____ _____  __   ___   _  _   _  _____  ___ _      _      _   ___ 
| _ \ || | __|_   _|_   _| \ \ / /_\ | \| | | |/ / _ \| _ \ |    /_\    /_\ | _ \
|   / __ | _|  | |   | |    \ V / _ \| . &grave| | ' &lt (_) |   / |__ / _ \  / _ \|   /
|_|_\_||_|___| |_|   |_|     \_/_/ \_\_|\_| |_|\_\___/|_|_\____/_/ \_\/_/ \_\_|_\
                                                                                 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
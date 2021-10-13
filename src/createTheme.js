 export default function toggleTheme() {

    if (document.body.classList.contains('light-theme')) {
       localStorage.setItem('createTheme' ,createDarkTheme())
    } else {
        console.log(document.body.classList.contains('dark-theme'))
       localStorage.setItem('createTheme' , createLightTheme()) 
    }
}



function createDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

       
}

function createLightTheme() {
     document.body.classList.remove('dark-theme')    
            document.body.classList.add('light-theme')

}
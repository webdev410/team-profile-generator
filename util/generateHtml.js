const fs = require('fs')

const renderteam = (response) => {
        console.log('renderTeam response', response)
        //console.log('renderTeam manager', manager)

        const renderManager = manager => {
                return `
               <div>${manager.getName()}</div>
               `;
        }
        const renderIntern = intern => {
                return `
                <div>${intern.getName()}</div>
                
                `;
        }
        const renderEngineer = engineer => {

                return `
                <div>${engineer.getName()}</div>
                `;
        }


        const htmlData = [];

        htmlData.push(response.filter(employee => employee.getRole() === "Intern").map(data => renderIntern(data)).join(""));
        htmlData.push(response.filter(employee => employee.getRole() === "Manager").map(data => renderManager(data)).join(""));
        htmlData.push(response.filter(employee => employee.getRole() === "Engineer").map(data => renderEngineer(data)).join(""));
        console.log('renderTeam htmlData', htmlData)
        return htmlData
}

// writeHTML = htmlData => {
//         return `
//         <!doctype html>
// <html lang="en">

//         <head>
//                 <!-- Required meta tags -->
//                 <meta charset="utf-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//                 <!-- Bootstrap CSS -->
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//                       integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
//                       crossorigin="anonymous">
//                 <link rel="stylesheet" href="../dist/fontawesome.css">
//                 <link rel="stylesheet" href="../dist/style.css">
//                 <title>Meet the Team</title>
//         </head>

//         <body>
//                 <header>
//                         <div class="container-fluid">
//                                 <div class="row">
//                                         <div class="col-12 header">
//                                                 <h1>Meet the Team</h1>
//                                         </div>
//                                 </div>
//                                 <div class="row">
//                               ${htmlData}
                                        
                                        
                                        
//                                 </div>
//                         </div>
//                 </header>
//                 <!-- Optional JavaScript; choose one of the two! -->
//                 <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
//                 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//                         integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//                         crossorigin="anonymous"></script>
//                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
//                         integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
//                         crossorigin="anonymous"></script>
//         </body>

// </html>




// `;
// }


module.exports = htmlData => {
       return `
<!doctype html>
<html lang="en">

        <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                      crossorigin="anonymous">
                <link rel="stylesheet" href="../dist/fontawesome.css">
                <link rel="stylesheet" href="../dist/style.css">
                <title>Meet the Team</title>
        </head>

        <body>
                <header>
                        <div class="container-fluid">
                                <div class="row">
                                        <div class="col-12 header">
                                                <h1>Meet the Team</h1>
                                        </div>
                                </div>
                                <div class="row">
                              ${renderteam(htmlData)}



                                </div>
                        </div>
                </header>
                <!-- Optional JavaScript; choose one of the two! -->
                <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                        crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                        crossorigin="anonymous"></script>
        </body>

</html>




`;
}





const products = [
    {  
        id:"01",
        name: "impresiones3D",
        job:" ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"Impresiones Ledesma3D es una tienda especializada en productos impresos en 3D. Una plataforma fácil de usar donde los clientes pueden explorar y comprar una amplia variedad de artículos personalizados y únicos.",
        githubUrl:"https://github.com/LedesmaFrancoAgustin/proyecto_final_ledesma"
    },
    {  
        id:"02",
        name: "2",
        job:" ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"",
        githubUrl:"https://github.com/"
    },
    {  
        id:"03",
        name: "3",
        job:"moustro ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"",
        githubUrl:"https://github.com/"
    },
    {  
        id:"04",
        name: "4",
        job:"moustro ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"",
        githubUrl:"https://github.com/"
    },
    {  
        id:"05",
        name: "5",
        job:"moustro ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"",
        githubUrl:"https://github.com/"
    },
    {  
        id:"05",
        name: "5",
        job:"moustro ",
        Image: "./assets/Img/Skills/imagen.png",
        description:"",
        githubUrl:"https://github.com/"
    },
 
    ]

// JavaScript para insertar el bloque HTML
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('containerProyects');
    var newContent = '';

    products.forEach(product => {
        newContent += `
            <div class="col-lg-4 col-md-6" >
                <div class="divProyect" style="background-image:url(  ${product.Image})">
                    <div class="background"></div>
                    <div class="cardProyect">
                        <div class="footer">
                            <div class="d-flex  connections">
                                <div class="col-6"> 
                                
                                    <div class="connection GitHub ms-3">
                                            <div class="icon ">
                                                <a href="${product.githubUrl}" target="_blank">
                                                <img src="./assets/Img/Iconos/github.png" alt="ImgGitHub"  >
                                                </a>
                                            </div>
                                    </div>
                                
                                    <div class="connection GitHub">
                                        <div class="icon">
                                            <a href="${product.githubUrl}" target="_blank">
                                            <img src="./assets/Img/Iconos/web.png" alt="ImgGitHub"  >
                                            </a>
                                        </div>
                                    </div>
                                  </div>  
                                    <div class="col-6 d-flex justify-content-end "> 
    
                                        <div class="divBtnVisitWeb   ">
                                                <button class="buttonVisitWeb" >Mas detalles</button>
                                        </div>
                                    </div>  
                            </div>
                            <div class="info">
                                <div class="name">${product.name}</div>
                                <div class="job">${product.description}</div>
                            </div>
                        </div>
                        <div class="card-blur"></div>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = newContent;
});
// CLASE CARRITOS
class Carrito {
    constructor(products){
        this.products = products;
    }

    getProducts(){
        return this.products;
    }

    calculateSubtotal(){
        var subtotal = 0;
        for(let product of this.products){
            subtotal += product.price * product.quantity;
        }
        return subtotal;
    }

    calculateTotal(){
        return this.calculateSubtotal() + 4.99;
    }

    addProduct(product){
        this.products.push(product);
    }

    removeProduct(productID, productSize){
        let productosCarrito = this.products;
        for(let producto of this.products){
            if((producto.id == productID) && (producto.size == productSize)){
                productosCarrito.splice(productosCarrito.indexOf(producto), 1);
            }
        }
        this.products = productosCarrito;
        localStorage.articlesList = JSON.stringify(this.products);
    }

    updateProduct(productID, productSize, quantity){
        let productosCarrito = this.products;
        productosCarrito.forEach(producto =>{
            if((producto.id == productID) && (producto.size == productSize)){
                producto.quantity = parseInt(quantity);
            }
        })
        this.products = productosCarrito;
        localStorage.articlesList = JSON.stringify(this.products);
    }
}

// IMAGENES SLIDER
const IMAGENES = [
    'https://cdn.shopify.com/s/files/1/0437/1913/1293/files/slide-5_1950x.jpg?v=1613575943',
    'https://cdn.shopify.com/s/files/1/0437/1913/1293/files/slide-4_1950x.jpg?v=1613575949',
    'https://cdn.shopify.com/s/files/1/0437/1913/1293/files/slide-6_1950x.jpg?v=1613575950'
];
const textoImagenes = [
    "MEGA SUMMER SALE",
    "SPRING - SUMMER 2020",
    "HOT TRENDING"
]

// COMPROBAR LOCALSTORAGE
if(!localStorage.articlesList){
    var articlesList = [];
}else{
    var articlesList = JSON.parse(localStorage.getItem('articlesList'))
}

// CREAR OBJETO CARRITO
var miCarrito = new Carrito(articlesList);

window.onload = ()=>{
    mainContainer = document.getElementsByTagName("main")[0];
    showHome();

    // MOSTRAR VISTA HOME
    document.getElementById("header--logo").addEventListener("click", ()=>{
        showHome();
        document.querySelectorAll(".nav--link").forEach(element => {
            element.classList.remove("selected");
        })
    })

    // SELECCIONAR SECCIONES
    let navLinks = document.querySelectorAll(".nav--link");
    navLinks.forEach(element => {
        element.addEventListener("click", ()=>{
            navLinks.forEach(span => {
                span.classList.remove("selected");
            });
            element.classList.add("selected");
        })
    })

    let sections = document.querySelectorAll(".section");
    for(let i = 0; i < sections.length; i++){
        sections[i].addEventListener("click", ()=>{
            navLinks.forEach(span => {
                span.classList.remove("selected");
            });
            navLinks[i].classList.add("selected");
        })
    }

    // SECCIÓN MEN
    navLinks[0].addEventListener("click", ()=>{
        showArticlesSection("Men");
    })
    document.getElementById("men").addEventListener("click", ()=>{
        showArticlesSection("Men");

    })

    // SECCIÓN WOMEN
    navLinks[1].addEventListener("click", ()=>{
        showArticlesSection("Women");
    })
    document.getElementById("women").addEventListener("click", ()=>{
        showArticlesSection("Women");
    })

    // SECCIÓN JEWELRY
    navLinks[2].addEventListener("click", ()=>{
        showArticlesSection("Jewelry");
    })
    document.getElementById("jewelry").addEventListener("click", ()=>{
        showArticlesSection("Jewelry");
    })

    // SECCIÓN ELECTRONICS
    navLinks[3].addEventListener("click", ()=>{
        showArticlesSection("Electronics");
    })
    document.getElementById("electronics").addEventListener("click", ()=>{
        showArticlesSection("Electronics");
    })

    // SHOPPING CART
    document.getElementById("carritoIcon").addEventListener("click", ()=>{
        showShoppingCart(miCarrito);
        document.querySelectorAll(".nav--link").forEach(element => {
            element.classList.remove("selected");
        })
    })

    // LOGIN REGISTER
    document.getElementById("loginIcon").addEventListener("click", ()=>{
        showLogInRegister();
    })
}

// FUNCIONES PARA MOSTRAR VISTAS
function showHome(){
    mainContainer.id = "home";
    mainContainer.innerHTML = "";

    let home = $(`<section id="carousel">
                    <div id="imagen"></div>
                    <span id="carousel--text"></span>
                </section>

                <div class="section" id="men">
                    <h2 class="sectionTitle">MEN CLOTHING</h2>
                    <div class="sectionImg">
                        <img src="img/men.jpg" alt="">
                    </div>
                </div>
                <div class="section" id="women">
                    <h2 class="sectionTitle">WOMEN CLOTHING</h2>
                    <div class="sectionImg">
                        <img src="img/women.jpg" alt="">
                    </div>
                </div>
                <div class="section" id="jewelry">
                    <h2 class="sectionTitle">JEWELRY</h2>
                    <div class="sectionImg">
                        <img src="img/jewelry.jpg" alt="">
                    </div>
                </div>
                <div class="section" id="electronics">
                    <h2 class="sectionTitle">ELECTRONICS</h2>
                    <div class="sectionImg">
                        <img src="img/electronics.jpg" alt="">
                    </div>
                </div>

                <!-- ABOUT US -->
                <section id="social_networks">
                    <div id="social_networks--images">
                        <img src="https://static.pullandbear.net/2/photos//2023/V/0/2/p/4596/571/641/02/4596571641_6_1_8.jpg?t=1669117094060&imwidth=563" alt="">
                        <img src="https://static.pullandbear.net/2/photos//2022/I/0/1/p/8750/315/746/04/8750315746_2_9_8.jpg?t=1669373463442&imwidth=563" alt="">
                        <img src="https://static.pullandbear.net/2/photos//2023/V/0/2/p/4230/515/251/02/4230515251_6_1_8.jpg?t=1669111987367&imwidth=563" alt="">
                    </div>
                    <div id="social_networks--content">
                        <h2>ABOUT US</h2>
                        <span>Somos una empresa la cual se dedica a la venta exclusiva de ropa, joyería y accesorios. Llevamos trabajando 3 años sin parar y siempre hemos tenido clientes sin parar. Somos una empresa fiable a sus clientes e intentamos dar el máximo rendimiento para sacar el máximo provecho de nuestras capacidades a la hora de crear y vender productos.</span>
                        <div id="social_networks--icons">
                            <a href="https://youtube.com" title="Sígueme en Youtube" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                            <a href="https://twitter.com" title="Sígueme en Twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" title="Sígueme en Instragram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://es-es.facebook.com/" title="Sígueme en Facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </section>

                <!-- NEWSLETTER -->
                <section id="newsletter">
                    <h2 id="newsletter--title">Suscríbete al Newsletter</h2>
                    <input type="email" placeholder="Introduce tu email" id="newsletter--email">
                    <button>Suscribirse</button>
                </section>`);

    $("#home").append(home);

    // SLIDER
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2500;
    let posicionActual = 0;
    let imagen = document.querySelector('#imagen');
    let imagenTitulo = document.querySelector('#carousel--text');
    
    // Pasar foto siguiente posición.
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    // Funcion que actualiza la imagen de imagen dependiendo de posicionActual.
    function renderizarImagen () {
        imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        imagenTitulo.innerHTML = textoImagenes[posicionActual];
    }

    // Activa el autoplay de la imagen.
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

    // Iniciar slider.
    renderizarImagen();
    playIntervalo();
}

function showArticlesSection(section){
    mainContainer.id = "mainArticles";
    mainContainer.innerHTML = "";
    let sectionName;

    if(section == "Men" || section == "Women"){
        sectionName = section.toUpperCase() + " CLOTHING";
    }else if(section == "Jewelry"){
        sectionName = "JEWELRY";
    }else if(section == "Electronics"){
        sectionName = "ELECTRONICS";
    }

    let mainHeader = $(`
    <div class="mainHeader">
        <h2>${sectionName}</h2>
        <div class="numColumns">
            <div class="numColumn" id="2">
                <span id="2"></span>
                <span id="2"></span>
            </div>
            <div class="numColumn" id="3">
                <span id="3"></span>
                <span id="3"></span>
                <span id="3"></span>
            </div>
            <div class="numColumn" id="4">
                <span id="4"></span>
                <span id="4"></span>
                <span id="4"></span>
                <span id="4"></span>
            </div>
        </div>
        <div class="orderBy">
            <span>Ordenar por: </span>
            <select class="order">
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    </div>
    `);
    $("#mainArticles").append(mainHeader);
    $("#mainArticles").append(`<img src="img/loading.gif" alt="" id="loadingGif">`);

    // CAMBIAR COLUMNAS ARTÍCULOS
    for(div of document.getElementsByClassName("numColumn")){
        div.addEventListener("click", (e)=>{
            changeColumns(e.target.id);
        })
    }

    let divArticles = $(`
    <div class="divArticles">
    </div>
    `);
    $("#mainArticles").append(divArticles);

    lanzarPeticionSeccion(section, "asc");

    // ORDENAR ARTÍCULOS
    $(".order").change(function(){
       lanzarPeticionSeccion(section, $(".order").val());
    });
}

function showArticleInfo(id){
    mainContainer.id = "mainArticleInfo";
    mainContainer.innerHTML = "";
    $("#mainArticleInfo").append(`<img src="img/loading.gif" alt="" id="loadingGif">`);
    lanzarPeticionArticulo(id);
}

function showShoppingCart(miCarrito){
    mainContainer.id = "shoppingCart";
    mainContainer.innerHTML = "";

    let emptyShoppingCart = '';

    if(miCarrito.products.length == 0){
        emptyShoppingCart += `<h3 id="emptyCart">No has añadido ningún producto al carrito</h3>`;
    }else{
        miCarrito.products.forEach(producto =>{
            let size;
            if((producto.category == "electronics") || (producto.category == "jewelery")){
                size = "";
            }else{
                size = " / " + producto.size;
            }
            emptyShoppingCart += `
            <div class="shoppinCartProduct">
                <figure>
                    <img src="${producto.img}" alt="">
                </figure>
                <div class="productInfo">
                    <div class="productoName">
                        <h3>${producto.title}${size}</h3>
                    </div>
                    <div class="productPrice">
                        <h4>${(producto.price * producto.quantity).toFixed(2)} €</h4>
                        <div class="quantity">
                            <span>Cantidad: </span>
                            <input type="number" class="productQuantity" value="${producto.quantity}" min=1>
                        </div>
                    </div>
                </div>
                <span class="deleteProductBtn">x</span>
                <input type="hidden" value="${producto.id}" class="productID">
                <input type="hidden" value="${producto.size}" class="productSize">
            </div>`;
        })
    }

    let shoppingTitle = $(`<h2 id="shoppingTitle">Tu carrito</h2>`); 
    let shoppingContainer = $(`
        <div id="shoppingContainer">
            <section id="shoppingContainer--products">
                ${emptyShoppingCart}
            </section>
            <section id="shoppingContainer--price">
                <div id="price">
                    <div id="subtotal">
                        <p class="subtotal--text">Subtotal: <span id="subtotal--price">${(miCarrito.calculateSubtotal()).toFixed(2)} €</span></p>
                        <p id="subtotal--text">Gastos de envío: <span id="subtotal--price">4.99 €</span></p>
                    </div>
                    <div id="total">
                        <p id="total--text">Total: <span id="total--price">${(miCarrito.calculateTotal()).toFixed(2)}€</span></p>
                    </div>
                </div>
                <div id="linkComprar">
                    <button id="comprarBtn">Comprar</button>
                </div>
            </section>
        </div>
    `);
    
    $("#shoppingCart").append(shoppingTitle);
    $("#shoppingCart").append(shoppingContainer);

    // BORRAR PRODUCTO DEL CARRITO
    $(".deleteProductBtn").click(function(){
        if($(this).siblings(".productSize").val() == "undefined"){
            miCarrito.removeProduct($(this).siblings(".productID").val(), "");
        }else{
            miCarrito.removeProduct($(this).siblings(".productID").val(), $(this).siblings(".productSize").val());
        }
        
        $(this).parent().slideUp();
        setTimeout(function(){
            showShoppingCart(miCarrito);
        }, 400);
    })

    // MODIFICAR CANTIDAD DEL ARTÍCULO
    $(".productQuantity").change(function(){
        if($(this).siblings(".productSize").val() == "undefined"){
            miCarrito.updateProduct($(this).parent().parent().parent().siblings(".productID").val(), $(this).parent().parent().parent().siblings(".productSize").val(), $(this).val());
        }else{
            miCarrito.updateProduct($(this).parent().parent().parent().siblings(".productID").val(), $(this).parent().parent().parent().siblings(".productSize").val(), $(this).val());
        }
        miCarrito.updateProduct()
        showShoppingCart(miCarrito);
    })

    // VISTA CHECKOUT
    $("#comprarBtn").click(function(){
        showCheckOut();
    })
}

function showLogInRegister(){
    mainContainer.id = "loginRegister";
    mainContainer.innerHTML = "";
    let forms = $(`
        <form action="" id="logIn" class="form">
            <h2>Iniciar Sesión</h2>
            <div class="inputs">
                <div class="input">
                    <label for="username">Nombre de usuario</label>
                    <input type="text" id="username" placeholder="Nombre de usuario" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña" required pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                </div>
            </div>
            <input type="submit" value="Iniciar Sesión">
        </form>
        <form action="" id="register" class="form">
            <h2>Registrarse</h2>
            <div class="inputs">
                <div class="input">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" placeholder="Nombre" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="surnames">Apellidos</label>
                    <input type="text" id="surnames" placeholder="Apellidos" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="username">Nombre de usuario</label>
                    <input type="text" id="username" placeholder="Nombre de usuario" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email@gmail.com" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}">
                </div>
                <div class="input">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña" required pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                </div>
            </div>
            <input type="submit" value="Registrase">
        </form>`);

    $("#loginRegister").append(forms);

    $(".form").submit(function(e){
        e.preventDefault();
    })
}

function showCheckOut(){
    mainContainer.id = "checkOut";
    mainContainer.innerHTML = "";
    let form = $(`
        <form action="" id="checkOutForm">
            <div id="directionData">
                <h2>Check Out</h2>
                <div class="input">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Nombre" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="surnames">Apellidos</label>
                    <input type="text" id="surnames" name="surnames" placeholder="Apellidos" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="direction">Dirección</label>
                    <input type="text" id="direction" name="direction" placeholder="Dirección" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email@gmail.com" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}">
                </div>
            </div>
            <div id="paymentData">
                <h2>Pago</h2>
                <div class="input">
                    <label for="titular">Titular</label>
                    <input type="text" id="titular" placeholder="Titular" required pattern="[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+">
                </div>
                <div class="input">
                    <label for="cardNumber">Número de tarjeta</label>
                    <input type="text" id="cardNumber" placeholder="Apellidos" required maxlength="16" pattern="^[0-9]{16}$" >
                </div>
                <div>
                    <label for="months">Fecha de caducidad</label>
                    <div class="select">
                        <select name="month" id="months">
                            <option hidden selected value="MM">Mes</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select name="year" id="years">
                            <option hidden selected value="YY">Año</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                        </select>
                    </div>
                </div>
                <div class="input">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="CVV" required  maxlenght="3">
                </div>
            </div>
            <input type="submit" value="Pagar" id="submitCheckOut">
        </form>`);

    $("#checkOut").append(form);

    // ENVIAR EMAIL DE COMPRAR
    $("#checkOut").submit(function(e){
        e.preventDefault();

        $("#checkOut").val("Enviando...");

        emailjs.send( "service_q5hu2pj" , "template_s237j1t" , {
            from_name : " AGC " ,
            nombre : $("#name") ,
            apellidos : $("#surnames") ,
            nombre_usuario : $("#username") ,
            email : $("#email"),
        }).then(() => {
            $("#checkOut").val("Email enviado");
        },(err) => {
            alert(JSON.stringify(err));
        });
    })
}

// AJAX
var httpRequest = new XMLHttpRequest();

// PETICIÓN ARTICLES SECTION
function lanzarPeticionSeccion(section, orderBy){
    let sectionName;
    if(section == "Men"){
        sectionName = "men's%20clothing";
    }else if(section == "Women"){
        sectionName = "women's%20clothing";
    }else if(section == "Jewelry"){
        sectionName = "jewelery";
    }else if(section == "Electronics"){
        sectionName = "electronics";
    }
    httpRequest.open("GET", "https://fakestoreapi.com/products/category/"+sectionName+"?sort="+orderBy);
    loadingGif();
    httpRequest.onreadystatechange = tratarPeticionSeccion;
    httpRequest.send();
}
function tratarPeticionSeccion(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            $(".divArticles").html("");
            $("#loadingGif").css({"display":"none"});
            articles = JSON.parse(httpRequest.responseText);
            articles.forEach(article =>{
                let articleCard = $(`
                <div class='articleCard'>
                    <div class='articleCard--image'>
                        <img src='${article.image}' alt=''>
                    </div>
                    <div class='articleCard--info'>
                        <span class='articleCard--name'>${article.title}</span>
                        <div class="rating">
                            <i data-star="${article.rating.rate}"></i>
                            <p>(${article.rating.count})</p>
                        </div>
                        <span class='articleCard--price'>${article.price} €</span>
                    </div>
                    <input type="hidden" value=${article.id} class="articleID">
                </div>`);
                $(".divArticles").append(articleCard);
            })

            $(".articleCard--image").click(function(){
                showArticleInfo($(this).siblings(".articleID").val())
            })
            $(".articleCard--name").click(function(){
                showArticleInfo($(this).parent().siblings(".articleID").val())
            })
        }
    }
}

// PETICIÓN INFORMACIÓN DEL ARTÍCULO
function lanzarPeticionArticulo(id){
    httpRequest.open("GET", "https://fakestoreapi.com/products/"+id);
    loadingGif();
    httpRequest.onreadystatechange = tratarInfoArticulo;
    httpRequest.send();
}

function tratarInfoArticulo(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            $("#loadingGif").css({"display":"none"});
            info = JSON.parse(httpRequest.responseText);
            let size;
            if((info.category == "electronics") || (info.category == "jewelery")){
                size = "";
            }else{
                size = `<div class="size">
                <h4>Talla</h4>
                <select name="" id="size">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>`;
            }
            articleDiv = $(`
                <div class='articleDiv--image'>
                    <img src='${info.image}' alt=''>
                </div>
                <div class='articleDiv--info'>
                    <h2>${info.title}</h2>
                    <h3>Descripción</h3>
                    <p class="articleDiv--description">${info.description}</p>
                    <p class="articleDiv--price">${info.price} €</p>
                    <div class="ratingArticle">
                        <i data-star="${info.rating.rate}"></i>
                        <p>(${info.rating.count})</p>
                    </div>
                    <div class="shoppingDetails">
                    <div class="quantity">
                        <h4>Cantidad</h4>
                        <select name="" id="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    ${size}
                    <input type="hidden" value="${info.category}" id="productCategory">
                </div>
                <div class="addToCartBtn">Añadir al carrito</div>
                </div>`);
        }
        $("#mainArticleInfo").append(articleDiv);

        $(".addToCartBtn").click(function(){
            if($("#size").val() == undefined){
                addArticleToCart(info.id, info.title, info.description, info.price, info.image, parseInt($("#quantity").val(), 10), "", info.category);
                $(".addToCartBtn").css({"background-color":"lime"});
                $(".addToCartBtn").html("Añadido al carrito");
            }else{
                addArticleToCart(info.id, info.title, info.description, info.price, info.image, parseInt($("#quantity").val(), 10), $("#size").val(), info.category);
            }
        })
    }
}

// CAMBIAR NÚMERO DE COLUMNAS
function changeColumns(numColumns){
    document.querySelector(".divArticles").style.gridTemplateColumns = "repeat("+numColumns+", 1fr)";
}

// FUNCIÓN PARA AÑADIR UN PRODUCTO AL CARRITO
function addArticleToCart(id, name, description, price, img, quantity, size, category){
    var Article = {
        id: id,
        title: name,
        description: description,
        price: price,
        img: img,
        quantity: quantity,
        size: size,
        category: category
    }

    console.log(Article)

    var productExists = false;

    articlesList.forEach(articulo =>{
        if(articulo.id == Article.id && articulo.size == Article.size){
            articulo.quantity += quantity;
            miCarrito.subtotal += Article.price;
            productExists = true;
        }
    })

    if(!productExists){
        articlesList.push(Article);
        miCarrito.subtotal += Article.price;
    }

    localStorage.articlesList = JSON.stringify(articlesList);
}

function loadingGif(){
    let gif = $("#loadingGif");
    gif.css({"display":"block"})
}
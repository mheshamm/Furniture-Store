

window.addEventListener('load', bedrooms)
window.addEventListener('load', livingRooms)
window.addEventListener('load', Anti)

function bedrooms(e){
    const xhr = new XMLHttpRequest ;
    xhr.open('GET' ,'js/bedrooms.json' , true)
    xhr.onload = function(){
        if(this.status === 200){
            const beds = JSON.parse(this.responseText);
            let out = "" ;
            beds.slice(0,8).forEach(function(bed){
                out += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                    <div class="product-item">
                        <div class="product-img">
                            <img
                                src="${bed.img}">
                            <div class="add-item">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                        </div>
                        <div class="product-body">
                            <h4>
                                ${bed.name}
                            </h4>
                            <span class="stars">
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>
                            <h6 class="price-pro">${bed.price}</h6>
                        </div>
    
                    </div>
    
                </div>
                ` 
            })
            document.getElementById('bedroom').innerHTML = out ;
        }
    }
    xhr.send() ;
}

function livingRooms(e){
    const xhr = new XMLHttpRequest ;
    xhr.open('GET' ,'js/living.json' , true)
    xhr.onload = function(){
        if(this.status === 200){
            const beds = JSON.parse(this.responseText);
            let out = "" ;
            beds.slice(-8).forEach(function(bed){
                out += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                    <div class="product-item">
                        <div class="product-img">
                            <img
                                src="${bed.img}">
                            <div class="add-item">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                        </div>
                        <div class="product-body">
                            <h4>
                                ${bed.name}
                            </h4>
                            <span class="stars">
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>
                            <h6 class="price-pro">${bed.price}</h6>
                        </div>
    
                    </div>
    
                </div>
                ` 
            })
            document.getElementById('livingroom').innerHTML = out ;
        }
    }
    xhr.send() ;
}

function Anti(e){
    const xhr = new XMLHttpRequest ;
    xhr.open('GET' ,'js/antiques.json' , true)
    xhr.onload = function(){
        if(this.status === 200){
            const beds = JSON.parse(this.responseText);
            let out = '';
            beds.slice(0,8).forEach(function(bed , i){
                out += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                    <div class="product-item">
                        <div class="product-img">
                            <img
                                src="${bed.img}">
                            <div class="add-item">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                        </div>
                        <div class="product-body">
                            <h4>
                                ${bed.name}
                            </h4>
                            <span class="stars">
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star blue"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>
                            <h6 class="price-pro">${bed.Price}</h6>
                        </div>
    
                    </div>
    
                </div>
                ` 
            })
            document.getElementById('antiques').innerHTML = out ;
            

           
            
            
        }

        xhr.onerror=function(){
            document.body.innerHTML('ERROR');
        }
    }
    xhr.send() ;
}



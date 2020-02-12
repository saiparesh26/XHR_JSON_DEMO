document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

//Load Customer

function loadCustomer(e){

    let xhr = new XMLHttpRequest();

    xhr.open("GET","customer.json",true);

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.city}</li>
                    <li>${customer.age}</li>
                </ul>
            `;

            document.getElementById("customer").innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

function loadCustomers(e){

    let xhr = new XMLHttpRequest();

    xhr.open("GET","customers.json",true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            let output = "";
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>${customer.id}</li>
                    <li>${customer.name}</li>
                    <li>${customer.city}</li>
                    <li>${customer.age}</li>
                </ul>
            `;
            });

            

            document.getElementById("customers").innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
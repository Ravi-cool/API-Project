// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     const colArr = await getColleges(country);
//     showColArr(colArr);
// });

// function showColArr(colArr) {
//     let list = document.querySelector("#list")
//     for (const col of colArr) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name
//         list.appendChild(li)
//     }
// }

// async function getColleges(country) {
//     try {
//         const response = await fetch(url + country);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//         return data; // Return the data to be used in the showColArr function
//     } catch (e) {
//         console.log("error - ", e);
//         return []; // Return an empty array in case of an error
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    const colArr = await getColleges(country);
    showColArr(colArr);
});

function showColArr(colArr) {
    for (const col of colArr) {
        console.log(col.name);
    }
}

async function getColleges(country) {
    try {
        const response = await fetch(url + country);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data; // Return the data to be used in the showColArr function
    } catch (e) {
        console.log("error - ", e);
        return []; // Return an empty array in case of an error
    }
}

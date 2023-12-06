const mainDiv = document.getElementById("mainDiv");
const getDetails = document.getElementById("getDetails");


getDetails.addEventListener("click", async () => {
  //!using the universities api to fetch the data from server.
  const res1 = await fetch(
    "https://yesno.wtf/api"
  );
  const data1 = await res1.json();
  console.log(data1);
    const output1 = document.getElementById("api1");
    if(data1.answer==="yes"){
    output1.innerHTML  = ` <strong>👌👍 YES 👍👌 </strong><br> <img src="${data1.image}"height="350px" alt="Yes / No">`;
    }
    else{
      output1.innerHTML  = `<strong> 👎👎NO 👎👎</strong><br><img src="${data1.image}"height="350px" alt="Yes / No">`;
    }

});


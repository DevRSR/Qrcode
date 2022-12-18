const form = document.querySelector("form");
const qr = document.querySelector("#qrcode");

const showSpinner = () => {
document.querySelector("#spinner").style.display = "flex";
}
const hideSpinner = () => {
document.querySelector("#spinner").style.display = "none";
}
const clearUI = () => {
  qr.innerHTML = '';
  let save = document.querySelector('.btn')
  if(save) save.remove();
}

hideSpinner();


form.onsubmit = (e) => {
  
  e.preventDefault();
  
  clearUI();
  
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  
  
  if(url === '') {
    hideSpinner();
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQrcode(url, size);
      
      setTimeout(() => {
      const saveUrl = qr.querySelector('img').src;
      createBtn(saveUrl)
      }, 50);
    }, 1000);
  }
}


const generateQrcode = (url, size) => {
 const qrcode = new QRCode ('qrcode', {
  text: url,
  width: size,
  height: size
 });
};
const createBtn = (saveUrl) => {
  let link = document.createElement('a');
  link.href = saveUrl;
  link.className = "btn";
  link.innerHTML = "save Image";
  link.download = 'qrcode';
  document.querySelector("#generated").appendChild(link);
}
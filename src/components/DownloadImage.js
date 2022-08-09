import html2canvas from "html2canvas";

const exportAsImage = async (el, imageFileName)=>{
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png",1.0);
    downloadImage(image,imageFileName);
}

const downloadImage = (img, name)=>{
    const fakeLink = window.document.createElement("a");
    fakeLink.style="display:none"
    fakeLink.download = name;

    fakeLink.href = img;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
}

export default exportAsImage;
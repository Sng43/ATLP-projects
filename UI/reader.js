function imageUrl (image) {
    var reader = new FileReader();
    const file= image 
    if (file) {
        reader.readAsDataURL(file);
        return reader;
    }
}

export default imageUrl
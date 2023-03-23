const getImagen = async() => {


    try {
        const apikey = '9rvWTnRDQsdlyj9fIALaWX3po8zsmyPZ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const {url} = data.images.original

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error)
    }

    

}

getImagen();

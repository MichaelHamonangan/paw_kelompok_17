import image from './Dashboard/bingung.jpg'

function Error404() {
    return (
    <>
     <section className='heading'>
        <img src={image} className='image-med'/>
            <h1>
            ERROR 404 : Page Not Found
            </h1>
            <p>Cahyo Sumber Migas</p>
        </section>
    </>
    )
}

export default Error404
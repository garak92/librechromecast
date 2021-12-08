export const Uploader = () => {
    return <form>
        <section className='section2'>
            <label for="files" >Select a local video file </label>
            <input id="files" type="file" />
        </section>
        <section className='section1'>
            <h2>Other options</h2>
            <label for="files">Add a subtitle file </label>
            <input id="files" type="file" />
            <label for="files">Input a video url </label>
            <input id="files" type="url" />
        </section>
    </form>
}
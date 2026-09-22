<script>
    import pmlog from '$lib/assets/pmlog-icon.svg';
    import transcription from "$lib/images/pmlog/transcription.svg"
</script>

<div class="project">
    <h3>PM Log <a href="https://pmlog.ca/">pmlog.ca</a></h3>
    <p>Upon most targets of observation, constructing a live record of everything they've ever said, everywhere they've ever been, and every activity they've ever planned to do is considered rather invasive and bad.</p>
    <p>Fortunately we have an exception for "public figures"! Using publicly accesible sources, PM Log places the eye of the machine God upon Canada's 24th Prime Minister: The Right Honourable Mark Joesph Carney.</p>
    <img class="floating" src={transcription} alt="Diagram of transcription and diarization process. 1) FFmpeg converts the audio to wav. 2) Whisper generates a transcription. 3) SpeechBrain model creates voice embeddings. 4) KMeans clustering identifies voices." />
    <p><b>Press conferences</b> published on <a href="https://www.cpac.ca/">cpac.ca</a> are transcribed by <a href="https://openai.com/index/whisper/">Whisper</a> and diarization is performed through KMeans clustering on <a href="https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb">spkrec-ecapa-voxceleb</a> embeddings. Voices from separate press conferences are clustered by proximity and then manually labeled with a speaker.</p>
    <p><b>Press releases</b> from <a href="https://www.pm.gc.ca/en/">pm.gc.ca</a> are parsed for location, date, time, and content.</p>
    <p>Every line in every transcript and press release is semantically indexed with an <a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">all-MiniLM-L6-v2</a> embedding.</p>
    <p>Through this data, journalists can follow the Prime Minister's activities in real time and trace his history of remarks on any subject. The information can be accessed, filtered, and searched on the <a href="https://pmlog.ca/">web interface</a> or through a <a href="https://pmlog.ca/api/">REST API</a>, <a href="https://pmlog.ca/graphql">GraphQL</a> or <a href="https://pmlog.ca/mcp">MCP</a>.</p>
</div>

<style>
    .floating {
        max-width: 350px;
        margin-left: 1em;
        margin-bottom: 1em;
    }
</style>
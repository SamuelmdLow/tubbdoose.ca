<script>
    import Post from "$lib/components/Post.svelte";
    let { data } = $props();
</script>


<div class="container">
    <div class="blog-sidebar">
        <h1>Hi. I'm Sam Low.</h1>
        <p class="introduction">Here are my blog posts.</p>

        <ul class="blog-list">
            {#each data.posts as post}
                <li>
                    <Post post={post} />
                </li>
            {/each}
        </ul>
    </div>

    <div class="projects">
        <h2>Projects</h2>
        <div>
            <h3>PM Log</h3>
            <p>This project parses the Prime Minister's press releases from pm.gc.ca and transcribes and diarizes press conferences from CPAC. All of the content is indexed with an embedding to allow for semantic search.</p>
            <p>Through this data, journalists can follow the Prime Minister's activities in real time and trace their history of remarks on any subject. The information can be accessed, filtered, and searched using a REST API, GraphQL or MCP.</p>
        </div>
        <div>
            <h3>Ubyssey</h3>
            <p>This project parses the Prime Minister's press releases from pm.gc.ca and transcribes and diarizes press conferences from CPAC. All of the content is indexed with an embedding to allow for semantic search.</p>
            <p>Through this data, journalists can follow the Prime Minister's activities in real time and trace their history of remarks on any subject. The information can be accessed, filtered, and searched using a REST API, GraphQL or MCP.</p>
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        min-height: 100vh;
        max-height: 100vh;
        display: flex;

        @media screen and (max-width: 780px) {
            max-height: none;
            flex-direction: column;
        }
    }
    .introduction {
        font-size: 1.25em;
    }
    .blog-sidebar {
        position: relative;
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;

        ul {
            margin-block: 2em;
            padding: 0;
            list-style: none;
        }

        @media screen and (min-width: 780px) {
            overflow: auto;

            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 5%;
                bottom: 5%;
                width: 2px;
                background-color: var(--colour-tubbdoose-theme-1);
            }
        }
    }

    .projects, .blog-sidebar {
        padding: 1.5em;
        @media screen and (min-width: 780px) {
            padding: 3em;
        }
    }
</style>
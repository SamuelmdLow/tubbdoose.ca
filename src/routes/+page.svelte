<script>
    import icon from '$lib/assets/tubbdoose-icon.svg';
    import Post from "$lib/components/Post.svelte";
    import Ubyssey from "$lib/components/projects/Ubyssey.svelte";
    import Pmlog from "$lib/components/projects/Pmlog.svelte";
    let { data } = $props();
</script>


<div class="container">
    <div class="blog-sidebar">
        <h1>Hi. I'm Sam Low.</h1>
        <p class="introduction">I'm a recent UBC computer science graduate interested in using ML and design for journalism.</p>

        <h2>Blogs</h2>

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
        <Pmlog />
        <Ubyssey />
    </div>

    <!--
    <div class="blogroll">
        <h2>Friends</h2>
        <ul>
            <li><a href="https://github.com/SamuelmdLow">Github</a></li>
            <li><a href="https://mas.to/@tubbdoose">Mastodon</a></li>
        </ul>
    </div>
    -->
    
    <img class="icon" src={icon} alt="Little tubbdoose on skateboard." />

</div>

<style lang="scss">
    .container {
        min-height: 100vh;
        max-height: 100vh;
        display: flex;

        @media screen and (max-width: 1000px) {
            padding-block: 1.5em;
            margin-inline: auto;
            width: fit-content;
            max-height: none;
            flex-direction: column;
        }
    }

    .icon {
        padding-top: 1em;
        margin: 1em auto;
        width: 100px;
        @media screen and (min-width: 1000px) {
            display: none;
        }
        @media screen and (min-width: calc(calc(1100px + 13em) + 200px)) {
            display: block;
            padding: 0;
            margin: 0;
            width: 200px;
            position: fixed;
            bottom: 1em;
            right: 1em;
        }
    }

    .projects, .blog-sidebar {
        padding-inline: 1.5em;
        max-width: 700px;
        @media screen and (min-width: 1000px) {
            padding: 3em;
            overflow: auto;
        }
    }

    .blog-sidebar {
        position: relative;
        width: 100%;
        flex-shrink: 0;
        box-sizing: border-box;

        .introduction {
            font-size: 1.25em;
        }

        ul {
            margin-block: 2em;
            padding: 0;
            list-style: none;
            li {
                margin-bottom: 1.5em;
            }
        }

        @media screen and (min-width: 1000px) {
            max-width: 500px;

            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 5%;
                bottom: 5%;
                width: 2px;
                background-color: var(--colour-tubbdoose-theme-2);
            }
        }
    }

    .blogroll {
        padding-inline: 1.5em;
        @media screen and (min-width: 1000px) {
        position: fixed;
        bottom: 0.5em;
        right: calc(200px + 0.5em);
        text-align: right;
            ul {
                list-style-position: inside;
            }
        }
    }
</style>
<script>
    import icon from '$lib/assets/tubbdoose-icon.svg';
    import Post from "$lib/components/Post.svelte";
    import Ubyssey from "$lib/components/projects/Ubyssey.svelte";
    import Pmlog from "$lib/components/projects/Pmlog.svelte";
    let { data } = $props();
</script>


<div class="container">
    <div class="blog-sidebar">
        <div class="bio">
            <h1>Hi. I'm Sam Low.</h1>
            <div class="introduction">
            <p>I'm a recent UBC computer science graduate interested in using ML and design for journalism!</p>
            <p><a rel="me" href="https://github.com/SamuelmdLow">GitHub</a>, <a rel="me" href="https://mas.to/@tubbdoose">Mastodon</a>.</p>
            </div>
        </div>

        <div class="blogs">
            <div class="rss">
                <a href="/rss">
                RSS<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0a8 8 0 0 0-8-8a1 1 0 0 1 0-2m0 4a6 6 0 0 1 6 6a1 1 0 1 1-2 0a4 4 0 0 0-4-4a1 1 0 0 1 0-2m.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" />
                </svg></a>
            </div>

            <h2>Blogs</h2>

            {#if data.posts.length > 0}
            <ul class="blog-list">
                {#each data.posts as post}
                    <li>
                        <Post post={post} />
                    </li>
                {/each}
            </ul>
            {:else}
            <p>Come back here soon...</p>
            {/if}
        </div>
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
            padding-block: 1em;
            margin-inline: auto;
            max-height: none;
            flex-direction: column;

            .blog-sidebar {
                padding-bottom: 0.5em;
            }
            .projects {
                border-top: 1px dotted var(--colour-tubbdoose-theme-1);
            }
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
        margin-inline: auto;
        padding-inline: 1em;
        max-width: 700px;
        @media screen and (min-width: 1000px) {
            margin-inline: 0;
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
            line-height: 1.5em;
            margin-block: 1em;
            p {
                margin-block: 0.5em;
            }
        }

        ul {
            margin-block: 1em;
            padding: 0;
            list-style: none;
            li {
                margin-bottom: 1.5em;
            }
        }

        @media screen and (min-width: 1000px) {
            max-width: 500px;

            h1 {
                font-size: 2.5em;
            }

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

    .rss {
        float: right;
        font-weight: normal;
        font-family: 'nanum gothic';
        font-size: 1rem;
        color: var(--colour-tubbdoose-theme-1);
        text-decoration: underline;

        svg {
            margin-left: 0.5em;
            display: inline;
            vertical-align: central;
            font-size: 1.25rem;
        }
    }
</style>
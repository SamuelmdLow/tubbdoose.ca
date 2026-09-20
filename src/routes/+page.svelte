<script>
    import Post from "$lib/components/Post.svelte";
    import icon from '$lib/assets/tubbdoose-icon.svg';
    import workday from '$lib/assets/itdoesntworkday.svg';
    import pmlog from '$lib/assets/pmlog-icon.svg';
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
        <div class="project">
            <h3>PM Log <a href="https://pmlog.ca/">pmlog.ca</a></h3>
            <a href="https://pmlog.ca/">
                <img style:width={"100px"} style:shape-outside={`url("${pmlog}")`} class="floating" src={pmlog} alt="PM Log." />
            </a>
            <p>This project parses the Prime Minister's press releases from <a href="https://www.pm.gc.ca/en/">pm.gc.ca</a> and transcribes and diarizes press conferences from <a href="https://www.cpac.ca/">CPAC</a>. All of the content is indexed with an embedding to allow for semantic search.</p>
            <p>Through this data, journalists can follow the Prime Minister's activities in real time and trace their history of remarks on any subject. The information can be accessed, filtered, and searched using a REST API, GraphQL or MCP.</p>
        </div>
        <div class="project">
            <h3>Ubyssey <a href="https://ubyssey.ca/">ubyssey.ca</a></h3>
            <p>The Ubyssey has been covering the UBC campus and training the next generation of Canadian journalists
                for more than 100 years. The newspaper consistently earns national awards, including a JHM award for
                Outstanding Website Design, which I won in 2026.
            </p>
            <p> As lead developer I ran meetings, decided priorities, assigned tasks, performed code reviews and was responsible for ubyssey.ca’s entire technology stack: JavaScript (React); Python (Django, Wagtail); MySQL; Nginx; Docker; Google Cloud Platform.. </p>
            <p>
                Undertook a whole site redesign and brought several projects from pitch to completion including:
            </p>
            <a href="https://itdoesntworkday.ubyssey.ca/">
                <img class="floating" style:shape-outside={`url("${workday}")`} src={workday} alt="Itdoesn't workday." />
            </a>
            <ul>
                <li>
                <a href="https://itdoesntworkday.ubyssey.ca/">ItDoesn’tWorkday</a>, a spoof of Workday Student that became a campus sensation.
                </li>
                <li>
                Liveblogging using WebSockets to deliver rich content updates to support live reporting.
                </li>
                <li>
                Events calendar that autonomously aggregated and categorized events across UBC
                </li>
                <li>
                Migrated from Google App Engine to Compute Engine to reduce costs by $500 per month.
                </li>
                <li>
                Reduced Lighthouse Speed Index by 10s through caching, reducing file sizes, and improving database queries.
                </li>
                <li>
                Advocated for close collaboration with the editorial team resulting in our elections dashboard, live debate
                coverage, microsites, special articles, and many new features to our CMS.
                </li>
            </ul>
        </div>
    </div>

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

    .projects {
        display: flex;
        flex-direction: column;
        .floating {
            float: right;
            max-width: 200px;
            shape-image-threshold: 0.5;
            shape-margin: 1em;
        }
        .project h3 a {
            &::before {
                content: "/ ";
            }
            color: var(--colour-tubbdoose-theme-1);
            text-decoration: none;
            font-weight: normal;
        }
    }
</style>
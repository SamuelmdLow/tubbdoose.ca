<script>
    const {post} = $props();

    /**
     * @param { Date} date
     */
    function formatDateString(date) {
        return new Intl.DateTimeFormat("en-US").format(date);
    }
</script>

<div class="post">
    <div class="icon">
        <time datetime={post.published_at}>{formatDateString(post.published_at)}</time>
        <a href={post.link}>
        <img src={"https://www.tubbdoose.com/static/images/intro.svg"} alt={post.title}/>
        </a>
    </div>
    <div class="content">
        <h3>{post.title}</h3>
        <p>{post.lede}</p>
        <div class="link"><a href={post.link}>Read more.</a></div>
    </div>
</div>

<style>
    .post {
        display: flex;
        gap: 1em;
        margin-bottom: 2em;
    }
    .icon {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        time {
            margin-inline: auto;
            margin-bottom: 0.75em;
            
            font-size: 0.75em;
            font-weight: bold;
            text-decoration: underline;
            color: var(--colour-black-100);
            text-box: trim-start cap alphabetic;
        }
        img {
            width: 75px;
            aspect-ratio: 1;
            height: auto;
            border-radius: 1em;
            object-fit: cover;
            object-position: center;
            border: 2px solid white;
        }
    }
    .content {
        text-box: trim-start cap alphabetic;
        h3, p {
            display: contents;
            font-size: 1em;
        }
        .link {
            margin-top: 1em;
            font-size: 0.8em;
            font-weight: 600;
            color: var(--colour-black-100);
            a {
                color: inherit;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
</style>
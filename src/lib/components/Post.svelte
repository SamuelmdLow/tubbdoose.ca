<script>
    const {post} = $props();
    import icon from '$lib/assets/tubbdoose-icon.svg';

    /**
     * @param { Date} date
     */
    function formatDateString(date) {
        return new Intl.DateTimeFormat("en-US").format(new Date(date));
    }
</script>

<div class="post">
    <div class="icon">
        <time datetime={post.published_at}>{formatDateString(post.published_at)}</time>
        {#if post.url}
        <a href={post.url}>
            <img src={post.image ? post.image : icon} alt={post.title}/>
        </a>
        {:else}
            <img src={post.image ? post.image : icon} alt={post.title}/>
        {/if}
    </div>
    <div class="content">
        <h3><a href={post.url}>{post.title}</a></h3>
        <p>{post.lede}</p>
        {#if post.url}
        <div class="link"><a href={post.url}>Read more.</a></div>
        {/if}
    </div>
</div>

<style>
    .post {
        display: flex;
        gap: 1em;
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
        h3 a {
            color: inherit;
            text-decoration: none;
        }
        .link {
            margin-top: 1em;
            font-size: 0.8em;
            font-weight: 600;
        }
    }
</style>
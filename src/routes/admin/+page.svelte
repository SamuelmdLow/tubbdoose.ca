<script lang="ts">
    const {data} = $props();
    let id = $state(-1);

    let title = $state("");
    let lede = $state("");
    let url = $state("");
    let image = $state("");

    let deleting = $state(false);
    let dialog;

    function edit(postId:number) {
        const posts = data.posts.filter((p) => p.id == postId);
        if (posts.length > 0) {
            const post = posts[0];
            id = post.id;
            title = post.title;
            lede = post.lede;
            url = post.url;
            image = post.image;
        }
    }

    function unedit() {
        id = -1;
        title = "";
        lede = "";
        url = "";
        image = "";
    }
</script>

<div class="container">
    <h1>Hi sexy admin!</h1>

    <form class="compose-box" method="POST" action="?/publish" >
        <table><tbody>
            <tr>
                <td class="label">Title</td>
                <td class="field"><input name="title" type="text" bind:value={title}></td>
            </tr>
            <tr>
                <td class="label">Lede</td>
                <td class="field"><input name="lede" type="text" bind:value={lede}></td>
            </tr>
            <tr>
                <td class="label">URL</td>
                <td class="field"><input name="url" type="text" bind:value={url}></td>
            </tr>
            <tr>
                <td class="label">Image</td>
                <td class="field"><input name="image" type="text" bind:value={image}></td>
            </tr>
        </tbody></table>
        <div class="buttons">
        {#if id > -1}
            <button onclick={(e) => unedit()}>Unedit {id}</button>
            <input name="id" type="hidden" value={id}/>
        {/if}
        <button>Publish</button>
        </div>
    </form>

    <table class="post-table">
    <tbody>
    {#each data.posts as post}
        <tr>
            <td class="controls">
                <button onclick={(e) => edit(post.id)}>{post.id}</button>
                <button onclick={(e) => {edit(post.id); dialog.showModal();}}>Delete</button>
            </td>
            <td class="title">{post.title}</td>
            <td><a href={post.url}>{post.url}</a></td>
            <td>{new Intl.DateTimeFormat("en-US", {dateStyle: "short",timeStyle: "short"}).format(new Date(post.published_at))}</td>
        </tr>
    {/each}
    </tbody>
    </table>

    <dialog bind:this={dialog}>
        <h1>Delete {id}?</h1>
        <div class="buttons">
            <button onclick={(e) => dialog.close()}>Cancel</button>
            <form method="POST" action="?/delete">
                <input type="hidden" value={id} name="id"/>
                <button>Delete</button>
            </form>
        </div>
    </dialog>
</div>

<style>
.container {
    margin: auto;
    max-width: 1200px;
}
h1 {
    text-align: center;
}

table.post-table {
    display: block;
    max-width: 100%;
    width: fit-content;
    margin: auto;
    tbody {
        display: block;
        width: 100%;
    }
    tr {
        border: 1px solid;
        width: 100%;
    }
    td {
        padding: 0.5em;
        color: var(--color-black-300);
        &.controls {
            display: flex;
            gap: 0.5em;
        }
        &.title {
            font-weight: bold;
            color: var(--color-black-100);
        }
    }
}

form.compose-box {
    margin: 2em auto;
    padding-inline: 1em;
    max-width: 600px;
    flex-direction: column;
    display: flex;
    table {
        width: 100%;
        td.label {
            width: 0;
            padding: 0;
            font-weight: 600;
            vertical-align: bottom;
        }
        td.field {
            display: flex;
        }
    }
    input {
        width: 100%;
    }
    label {
        margin-bottom: 1em;
    }
}
.buttons {
    margin-top: 1em;
    display: flex;
    justify-content: right;
    gap: 1em;
}
dialog {
    padding: 2em;
    border: 2px solid var(--colour-tubbdoose-theme-1);
    h1 {
        margin-top: 0;
        font-size: 1.5em;
    }
}
</style>
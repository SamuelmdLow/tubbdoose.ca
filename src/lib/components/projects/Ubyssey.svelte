<script>
    import workday from '$lib/assets/itdoesntworkday.svg';
</script>

<div class="project">
    <h3>The Ubyssey <a href="https://web.archive.org/web/20260423145154mp_/https://ubyssey.ca/">ubyssey.ca</a></h3>
    <p><i>The Ubyssey</i> has been covering the University of British Columbia and training the next generation of Canadian journalists
        since 1918. The newspaper consistently earns national awards. That includes a JHM award for
        <i>Outstanding Website Design</i> which we won in 2026 while I was lead developer!
    </p>
    <p>I worked on the newspaper's website from 2023 to 2026. Here are some of my favourite contributions!</p>
    <ul>
        <li>
        <a href="https://itdoesntworkday.ubyssey.ca/">
            <img class="floating" style:shape-outside={`url("${workday}")`} src={workday} alt="Itdoesn't workday." />
        </a>
        <b>An elaborate spoof of <i>Workday Student</i></b> called <a href="https://itdoesntworkday.ubyssey.ca/"><i>ItDoesn’tWorkday</i></a>. It topped the dreaded subreddit for a good period!
        </li>
        <li>
        <b>A liveblogging platform</b> native to our CMS. I barely slept the week we released it but it was SO COOL to see my software open up an entirely new medium of journalism to our newspaper! We used it for live coverage of student union <a href="https://web.archive.org/web/20260804233512/https://ubyssey.ca/news/ams-president-candidates-at-the-great-debate/">debates</a> and <a href="https://web.archive.org/web/20260423145136/https://ubyssey.ca/news/between-the-motions-14-01-2026/">meetings</a>.
        </li>
        <li><b>The homepage</b>. I developed a redesign of our homepage that allowed individual articles and groups of articles to be presented uniquely. It created a lot of possibilities for creativity! <a href="https://web.archive.org/web/20260311122622/https://ubyssey.ca/">This snapshot</a> is a good example.</li>
        <li>
        <b>An events calendar</b> that autonomously aggregated and categorized campus events across several sources.
        </li>
        <li><b>A Migration to Google Compute Engine</b> from App Engine. It saved us $500 a month!!!</li>
    </ul>
    <p>I also wrote some <a href="https://web.archive.org/web/20260512043552/https://ubyssey.ca/authors/samlow/">funny articles</a> for the recently expunged Humour section.</p>
</div>

<style>

.floating {
    float: right;
    max-width: min(250px, 50%);
    margin-left: 1em;
    margin-bottom: 1em;
}

</style>
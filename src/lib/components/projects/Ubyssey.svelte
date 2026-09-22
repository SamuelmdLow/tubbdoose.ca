<script>
    import workday from '$lib/assets/itdoesntworkday.svg';
</script>

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
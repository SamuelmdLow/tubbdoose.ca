export const load = ({ params }) => {
	return {
		posts: [{
			title: `NYT Interview with Aaron Soarkin.`,
			lede: `I thought what he said about his writing process was really interesting.`,
            published_at: Date.UTC(2026, 8, 19),
            link: `https://www.tubbdoose.com/posts/summer2023`,
		},
        {
            title: `Airport concessions.`,
            lede: `A lot of people, including me, were really pissed about the talk of “exploring alternative models of ownership” for airports.`,
            published_at: Date.UTC(2026, 8, 19),
            link: `https://mas.to/@tubbdoose/117287468817104300`
        }]
	};
};
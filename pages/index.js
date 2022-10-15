import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://png.pngtree.com/png-clipart/20191121/original/pngtree-golden-technology-light-effect-round-frame-png-image_5148149.jpg',
		address: "Some address 5, 12345 Some City",
		descrition: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'A Secend Meetup',
		image: 'https://png.pngtree.com/png-clipart/20191121/original/pngtree-golden-technology-light-effect-round-frame-png-image_5148149.jpg',
		address: "Some address 10, 12345 Some City",
		descrition: 'This is a secend meetup!',
	}
]

function HomePage() {
	return (
		<MeetupList meetups={DUMMY_MEETUPS} />
	)
}

export default HomePage
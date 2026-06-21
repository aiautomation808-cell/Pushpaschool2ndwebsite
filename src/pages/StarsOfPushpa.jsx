import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

// Competition results — winners grouped by event.
const events = [
  {
    title: 'Greeting Card Making — Class I, II, III',
    winners: [
      ['I', 'Ruchi Vohra', 'III-C'],
      ['II', 'Vidushi Chajed', 'III-A'],
      ['III', 'Bhoomi Singhi', 'II-C'],
    ],
  },
  {
    title: 'Greeting Card Making — Class IV, V',
    winners: [
      ['I', 'Radhika Sarsiya', 'V-B'],
      ['II', 'Vineet Tailor', 'V-A'],
      ['III', 'Archi Jain', 'IV-B'],
    ],
  },
  {
    title: 'Poster Making — Class VI–VIII',
    winners: [
      ['I', 'Mehar Azhar', 'VIII-B'],
      ['II', 'Tehreem Khan', 'VIII-B'],
      ['III', 'Subahu', 'VI-A'],
    ],
  },
  {
    title: 'Rangoli Making — Class VI–VIII',
    winners: [
      ['I', 'Pankaj Yadav', 'VII-B'],
      ['II', 'Priyal Jain', 'VI-B'],
      ['III', 'Vanshita Bairagi', 'VI-A'],
    ],
  },
  {
    title: 'Rangoli Making — Class VIII–IX',
    winners: [
      ['I', 'Prafull Jain', 'VIII-A'],
      ['II', 'Divya Namdev', 'IX-A'],
      ['III', 'Shradha Jain', 'IX-B'],
    ],
  },
  {
    title: 'Rangoli Making — Class XI–XII',
    winners: [
      ['I', 'Ayushi Soni', 'XII Comm.'],
      ['II', 'Sandhya Verma', 'XII Sci'],
      ['III', 'Ranta Vohra', 'XII Comm.'],
    ],
  },
  {
    title: 'Drawing Competition — Class IV–V',
    winners: [
      ['I', 'Muneeba Ansari', 'V-B'],
      ['II', 'Sebastian', 'V-C'],
      ['III', 'Yashaswi Jaiswal', 'V-C'],
    ],
  },
  {
    title: 'Drawing Competition — Class VI–VII',
    winners: [
      ['I', 'Shruti Soni', 'VII-A'],
      ['II', 'Somya Bhatnagar', 'VI-B'],
      ['III', 'Zakiya Sahab', 'VII-B'],
    ],
  },
  {
    title: 'Drawing Competition — Class VIII',
    winners: [
      ['I', 'Harshita Jain', 'VIII-B'],
      ['II', 'Ojaswi Banwat', 'VIII-A'],
      ['III', 'Ojaswi Barjatya', 'VIII-A'],
    ],
  },
  {
    title: 'Mono Act Competition — Class I–VI',
    winners: [
      ['I', 'Navel Samuel', 'I-B'],
      ['II', 'Harsh Javalaya & Vinit', 'IV-A'],
      ['II', 'Yuvraj & Vivek Yadav', 'IV-B'],
      ['III', 'Suyesh & Bhavesh Sadhvani', 'V-A'],
    ],
  },
  {
    title: 'Moral Skit Competition — Class VII–XII',
    winners: [
      ['I', 'Faiz & Group', 'VII-B'],
      ['II', 'Saumya & Group', 'VIII-A'],
      ['II', 'Shivam & Group', 'IX-B'],
      ['III', 'Anvi & Group', 'VIII-B'],
    ],
  },
  {
    title: 'Fancy Dress — Nursery A, B, C',
    winners: [
      ['I', 'Methil Samuel', ''],
      ['II', 'Harsh Tigga', ''],
      ['III', 'Aarna Runwal', ''],
    ],
  },
  {
    title: 'Fancy Dress — K.G. I A, B, C',
    winners: [
      ['I', 'Nimish Vohra', ''],
      ['II', 'Rishika Mankodi', ''],
      ['III', 'Virti Chhajed', ''],
    ],
  },
  {
    title: 'Fancy Dress — K.G. II A, B, C',
    winners: [
      ['I', 'Eliza Khan', ''],
      ['II', 'Parin Mankodi', ''],
      ['III', 'Fatima Mirza', ''],
    ],
  },
  {
    title: 'Fancy Dress — Class I A, B, C',
    winners: [
      ['I', 'Anugrah Tiwari', ''],
      ['II', 'Prince Parmar', ''],
      ['III', 'Nishant Tigga', ''],
    ],
  },
  {
    title: 'Fancy Dress — Class II A, B, C',
    winners: [
      ['I', 'Neval Samuel', ''],
      ['II', 'Darshini Soni', ''],
      ['III', 'Swarnim Bhawsar', ''],
    ],
  },
  {
    title: 'Fancy Dress — Class III A, B, C',
    winners: [
      ['I', 'Disha Ranka', ''],
      ['II', 'Avni Agrawal', ''],
      ['III', 'Sneha Singh Thakur', ''],
    ],
  },
  {
    title: 'Patriotic Dance Competition — Boys',
    winners: [
      ['I', 'Emmanuel & Group', 'Blue House'],
      ['II', 'Praffull & Group', 'Red House'],
      ['III', 'Tarun & Group', 'Yellow House'],
    ],
  },
  {
    title: 'Patriotic Dance Competition — Girls',
    winners: [
      ['I', 'Avni & Group', 'Yellow House'],
      ['II', 'Nandini & Group', 'Green House'],
      ['III', 'Bharti & Group', 'Red House'],
    ],
  },
  {
    title: 'Craft Competition — Class V',
    winners: [
      ['I', 'Chaitanya Sahu', ''],
      ['II', 'Kratika Sharma', ''],
      ['II', 'Kanishtha Bairagi', ''],
      ['III', 'Harsh Soni', ''],
    ],
  },
  {
    title: 'Craft Competition — Class VI',
    winners: [
      ['I', 'Swasti Jain', ''],
      ['II', 'Tamanna Kushwah', ''],
      ['III', 'Anshika Gupta', ''],
    ],
  },
  {
    title: 'Craft Competition — Class VII',
    winners: [
      ['I', 'Mukta Soni', ''],
      ['II', 'Palak Pandey', ''],
      ['III', 'Chirayu Shrimal', ''],
    ],
  },
  {
    title: 'Craft Competition — Class VIII',
    winners: [
      ['I', 'Ati Nagori', ''],
      ['II', 'Mahek Khandelwal', ''],
      ['III', 'Prafull Jain', ''],
    ],
  },
  {
    title: 'Poem Recitation — Class I',
    winners: [
      ['I', 'Alphonsa Xaxa', ''],
      ['II', 'Muskan Thakre', ''],
      ['III', 'Bhavya Sethiya', ''],
      ['', 'Akansh Jain', ''],
    ],
  },
  {
    title: 'Poem Recitation — Class II',
    winners: [
      ['I', 'Bhoomi Dubey', ''],
      ['II', 'Neval Samuel', ''],
      ['III', 'Dhruv Jain', ''],
    ],
  },
  {
    title: 'Poem Recitation — Class III',
    winners: [
      ['I', 'Ashish Malviya', ''],
      ['II', 'Jaydeep Singh', ''],
      ['III', 'Fatima Saify', ''],
    ],
  },
]

const rankStyles = {
  'I': 'bg-gold-100 text-gold-700 ring-1 ring-gold-300',
  'II': 'bg-slate-100 text-slate-700 ring-1 ring-slate-300',
  'III': 'bg-amber-100 text-amber-700 ring-1 ring-amber-300',
}

export default function StarsOfPushpa() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="School Life"
        title="Stars of Pushpa"
        subtitle="Celebrating our young achievers and their accomplishments across co-curricular competitions."
        image={img.artClass}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <p className="mb-10 max-w-3xl text-slate-600 leading-relaxed">
            At Pushpa School, we believe in nurturing every child's unique talents. Our students consistently shine in inter-house and inter-class competitions spanning art, craft, literature, music and stage performance. Here are our proud winners.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={Math.min((i % 2) * 0.1, 0.2)}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h2 className="mb-4 text-lg font-bold text-primary-900 leading-snug">{event.title}</h2>
                <ul className="space-y-2">
                  {event.winners.map(([rank, name, cls], idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${rankStyles[rank] || 'bg-slate-50 text-slate-500'}`}>
                        {rank || '·'}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">{name}</span>
                      {cls && <span className="ml-auto text-xs text-slate-400">{cls}</span>}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

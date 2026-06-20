// Centralized image URLs and school contact data used across the site.
// Real school photos are sourced from https://www.pushpaschool.com/
// Contact details verified against the official site.

// Real photos from pushpaschool.com (served from /public/photos)
export const photo = {
  principalDesk: '/photos/principal-desk.jpg',
  paintingCover: '/photos/painting-cover.png',
  painting1: '/photos/painting-1.png',
  painting2: '/photos/painting-2.png',
  painting3: '/photos/painting-3.png',
  painting4: '/photos/painting-4.png',
}

// Complementary stock imagery (Unsplash) for sections without real photos yet.
export const img = {
  heroSchool: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
  campusAir: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1920&q=80',
  studentsStudying: 'https://images.unsplash.com/photo-1509062522246-375597c274a1?auto=format&fit=crop&w=1200&q=80',
  classroom: 'https://images.unsplash.com/photo-1497636144937-2999aedebf22?auto=format&fit=crop&w=1200&q=80',
  library: 'https://images.unsplash.com/photo-1580582932707-34b093c5243a?auto=format&fit=crop&w=1200&q=80',
  scienceLab: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
  studentsGroup: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  schoolBuilding2: 'https://images.unsplash.com/photo-1427504494685-822f3e846f52?auto=format&fit=crop&w=1200&q=80',
  teaching: 'https://images.unsplash.com/photo-1546452314-c040b4f2ab67?auto=format&fit=crop&w=1200&q=80',
  teachers: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
  education: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  schoolBus: 'https://images.unsplash.com/photo-1501504905252-473c4bbcd43e?auto=format&fit=crop&w=1200&q=80',
  sports: 'https://images.unsplash.com/photo-1525921429634-9ab036428b9d?auto=format&fit=crop&w=1200&q=80',
  artClass: 'https://images.unsplash.com/photo-1510510804060-377933c62751?auto=format&fit=crop&w=1200&q=80',
  admissions: 'https://images.unsplash.com/photo-1523240795612-9a054b0db744?auto=format&fit=crop&w=1200&q=80',
  aboutBuilding: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
  aboutGraduation: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  aboutTeachers: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
  aboutStudents: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  contactCampus: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
}

// The MIS portal URL from the official site.
export const misPortalUrl = 'http://119.81.222.115:1075/DefaultMIS1.aspx'

export const galleryImages = [
  { src: photo.paintingCover, full: photo.paintingCover, caption: 'Painting Activity' },
  { src: photo.painting1, full: photo.painting1, caption: 'Painting Activity' },
  { src: photo.painting2, full: photo.painting2, caption: 'Painting Activity' },
  { src: photo.painting3, full: photo.painting3, caption: 'Painting Activity' },
  { src: photo.painting4, full: photo.painting4, caption: 'Painting Activity' },
  { src: 'https://images.unsplash.com/photo-1509062522246-375597c274a1?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1509062522246-375597c274a1?auto=format&fit=crop&w=1600&q=80', caption: 'Students Studying' },
  { src: 'https://images.unsplash.com/photo-1497636144937-2999aedebf22?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1497636144937-2999aedebf22?auto=format&fit=crop&w=1600&q=80', caption: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1580582932707-34b093c5243a?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1580582932707-34b093c5243a?auto=format&fit=crop&w=1600&q=80', caption: 'Library' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80', caption: 'Science Lab' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80', caption: 'Students' },
  { src: 'https://images.unsplash.com/photo-1427504494685-822f3e846f52?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1427504494685-822f3e846f52?auto=format&fit=crop&w=1600&q=80', caption: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1546452314-c040b4f2ab67?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1546452314-c040b4f2ab67?auto=format&fit=crop&w=1600&q=80', caption: 'Teaching' },
  { src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1600&q=80', caption: 'Campus Life' },
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80', caption: 'Teachers' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80', caption: 'Education' },
  { src: 'https://images.unsplash.com/photo-1501504905252-473c4bbcd43e?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1501504905252-473c4bbcd43e?auto=format&fit=crop&w=1600&q=80', caption: 'School Bus' },
  { src: 'https://images.unsplash.com/photo-1525921429634-9ab036428b9d?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1525921429634-9ab036428b9d?auto=format&fit=crop&w=1600&q=80', caption: 'Sports' },
  { src: 'https://images.unsplash.com/photo-1510510804060-377933c62751?auto=format&fit=crop&w=900&q=80', full: 'https://images.unsplash.com/photo-1510510804060-377933c62751?auto=format&fit=crop&w=1600&q=80', caption: 'Art Class' },
]

export const schoolContact = {
  name: 'Pushpa Senior Secondary School',
  shortName: 'Pushpa School',
  address: 'Kannod Road, Ashta, Sehore (Distt.), Pin - 466116',
  addressShort: 'Ashta, Sehore (Distt.), M.P., India',
  phone: '07560-242178',
  fax: '243974',
  email: 'pushpaashta@yahoo.com',
  website: 'www.pushpaschool.com',
  officeHours: '9:00 am to 1:30 pm',
  principalMeeting: '9:00 A.M. to 10:00 A.M.',
  principal: 'Fr. Melvin CJ',
}

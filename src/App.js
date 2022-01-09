import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import './App.css';
import { Typography } from '@mui/material';

const styles = {
  media: {
     height: 0,
     paddingTop: '56.25%' 
  },
  card: {
     position: 'relative',
  },
  overlay: {
     display: 'flex', 
     alignItems: 'center',
     justifyContent: 'center', 
     textAlign: 'center',
     fontSize: '3vw',
     backgroundColor: '#D5F5E3',
  },
  headTitle: {
    padding: 20, 
    color: '#D5F5E3', 
    fontSize: '5vw',
  }
}

const clips = [
  {
    'title': 'Tell \'em to Fuck Off',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Floganfo.mp3?alt=media&token=d351359e-0a02-42ef-92e2-f05904623c78',
    'image': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/succession-logan-roy-1591265392.jpg?crop=1xw:1xh;center,top&resize=480:*',
  },
  {
    'title': 'Can\'t Do it',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Fcantdoit.mp3?alt=media&token=ddd665db-3852-4708-8159-8b07acad9000',
    'image': 'https://i.guim.co.uk/img/media/31e4501e1f425cc2c4422a303fa4930e663c0c1c/1301_249_4398_2639/master/4398.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d2ba13951f231cfcb54bc454a5a6fea3',
  },
  {
    'title': 'Killer',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Fkiller.mp3?alt=media&token=a66f7100-6970-476c-90b7-1c4834365706',
    'image': 'https://cdn.vox-cdn.com/thumbor/SWqCYqKy9xzUcYGSaSNmWJy-RuI=/0x0:1920x1080/1200x800/filters:focal(738x408:1044x714)/cdn.vox-cdn.com/uploads/chorus_image/image/65481777/logansmile.0.png',
  },
  {
    'title': 'Nobody',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Fnobody.mp3?alt=media&token=9f3f4f83-6103-46be-8862-2a14c472f274',
    'image': 'https://i.dailymail.co.uk/1s/2021/12/13/08/51708625-10302983-Logan_Logan_Roy_Brian_Cox_sets_up_a_meeting_with_tech_billionair-a-63_1639385132476.jpg',
  },
  {
    'title': 'Watch \'em Squeal',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Fsqueal.mp3?alt=media&token=95223349-e45a-40f1-b032-95be9573b609',
    'image': 'https://www.themarysue.com/wp-content/uploads/2021/11/logan-roy-succession.jpg',
  },
  {
    'title': 'Choreographed',
    'audiofile': 'https://firebasestorage.googleapis.com/v0/b/langolearn.appspot.com/o/clips%2Fchoreographed.mp3?alt=media&token=aeb05549-1b80-4346-89cc-545219f2a0b4',
    'image': 'https://preview.redd.it/7asfgotkpz381.png?auto=webp&s=60adf8d9458e08b59fa1d115d846740240a6d5dc',
  },
];

const ClipCard = ({title, image, audiofile}) => {
  const audio = new Audio(audiofile)
  const playClip = () => audio.play()
  return <Grid item xs={6} >
            <Card style={styles.card} onClick={playClip}>
              <CardMedia image={image} style={styles.media}/>
                <Typography style={styles.overlay}>
                  {title}
                </Typography>
            </Card>
          </Grid>
}

function App() {
  return (
    <div className='App-main'>
      <Typography style={styles.headTitle}>
        Succession Clips
      </Typography>
      <Grid container spacing={2} >
        {clips.map(c => <ClipCard {...c} key={c.title} />)}
      </Grid>
    </div>
  );
}

export default App;

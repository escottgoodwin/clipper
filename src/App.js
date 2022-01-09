import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './App.css';

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
    'audiofile': 'loganfo.mp3',
    'image': 'logankiller.png',
  },
  {
    'title': 'Can\'t Do it',
    'audiofile': 'cantdoit.mp3',
    'image': 'loganuhhuh.png',
  },
  {
    'title': 'Killer',
    'audiofile': 'killer.mp3',
    'image': 'logan.jpeg',
  },
  {
    'title': 'Nobody',
    'audiofile': 'nobody.mp3',
    'image': 'loganuhhuh.png',
  },
  {
    'title': 'Watch \'em Squeal',
    'audiofile': 'squeal.mp3',
    'image': 'logan.jpeg',
  },
  {
    'title': 'Choreographed',
    'audiofile': 'choreographed.mp3',
    'image': 'logankiller.png',
  },
];

const ClipCard = ({
  title, 
  image, 
  audiofile,
}) => {
  const imagePath = `clipper/images/${image}`
  const audiofile1 = `clipper/audio/${audiofile}`
  const audio = new Audio(audiofile1)
  const playClip = () => audio.play()
  return <Grid item xs={6} >
            <Card style={styles.card} onClick={playClip}>
              <CardMedia image={imagePath} style={styles.media}/>
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

import React from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import moviesData from '../../common/moviesData';
import genre from '../../common/genre';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import artists from '../../common/artists';


class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      stateGenre: genre,
      stateArtist: artists,
      statemoviesData : moviesData,
    };
  }


  render() {
    return (
      <div >

        <Header />
        <p className="heading">Upcoming Movies</p>
        <div className="root">
          <GridList className="gridList" cols={7}>
            {this.state.statemoviesData.map((tile) => (
              <GridListTile key={tile.id} style={{ height: "250px" }} >
                <img src={tile.poster_url} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  /*classes={{
                    root: titleBar,
                    title: title,
                  }}*/
                  actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                      {/*<StarBorderIcon className="title" />*/}
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>

        <div className="flex-container">
          <div className="rootForReleasedMovies">
            <GridList className="gridList" cols={4}>
              {this.state.statemoviesData.map((tile) => (
                <GridListTile key={tile.id} style={{ height: "350px" }} >
                  <img src={tile.poster_url} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    /*classes={{
                      root: titleBar,
                      title: title,
                    }}*/
                    subtitle={<span>Release Date: {tile.release_date}</span>}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                        {/*<StarBorderIcon className="title" />*/}
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>


          <Card className="rootForCard">
            <CardContent>
              <Typography className="titleForCard" style={{ color: "slateblue" }} gutterBottom>
                Find Movies By
              </Typography>
              <form className="containerForm" noValidate>
                <TextField required id="standard-required" label="Required" defaultValue="Movie Name" />
                <FormControl className="formControl">
                  <FormHelperText>Genre</FormHelperText>
                  <NativeSelect
                    className="selectEmpty"
                    value="Genre"
                    name="genre"
                    /*onChange={handleChange}*/
                    inputProps={{ 'aria-label': 'genre' }}
                  >
                    <option value="Genre" disabled>
                      Genre
                    </option>
                    {this.state.stateGenre.map((ele) => {
                      return <option value={ele.id}>{ele.name}</option>
                    })}
                  </NativeSelect>
                  </FormControl>
                  <FormControl className="formControl">
                    <FormHelperText>Artists</FormHelperText>
                    <NativeSelect
                      className="selectEmpty"
                      value="Artist"
                      name="artist"
                    /*onChange={handleChange}*/
                      inputProps={{ 'aria-label': 'artist' }}
                    >
                    <option value="Artists" disabled>
                      Artists
                    </option>
                    {this.state.stateArtist.map((el) => {
                      return <option value={el.id}>{el.first_name}{el.last_name}</option>
                    })}
                  </NativeSelect>
                </FormControl>

                <TextField
                  id="date"
                  label="Release Date Start"
                  type="date"
                  defaultValue="2017-05-24"
                  className="textFieldForDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="Release Date End"
                  type="date"
                  defaultValue="2017-05-24"
                  className="textFieldForDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>


            </CardContent>
            <CardActions >
              <Button size="small" variant="contained" color="primary">Apply</Button>
            </CardActions>
          </Card>
        </div>



      </div>
    );
  }
}

export default Home;
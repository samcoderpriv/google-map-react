import axios from "axios";

const search = async (req, res) => {
  try {
    const { address, city, province, country, postalCode } = req.query;
    const finalAddress = `${postalCode}+${province}+${address}+${city}+${country}` 
    const apiKey = 'AIzaSyACwT5Q26aUC7Pf0DwOWvIKMAEqexmM-vs';
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${finalAddress}&key=${apiKey}`);
    const data = response.data.results;
    return res.status(200).json({
        msg: "Searched Location",
        data
    });
  } catch (error){
    res.status(400).json({ error });
  }
  console.log('sadasd');
  return "asdas";
}

export default search;



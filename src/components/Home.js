import Button from './Button';
const Home = ({onRetrieve}) => {
    return (  
        <div>
            <p>Pull Monster Hunter</p>
            <Button 
             color='green' text='Retrieve' onClick={onRetrieve} />
        </div>
    );
}
 
export default Home;

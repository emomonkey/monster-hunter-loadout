import Button from './Button';
const Home = ({onRetrieve}) => {
    return (  
        <div>
            <p>Learn React</p>
            <Button 
             color='green' text='Retrieve' onClick={onRetrieve} />
        </div>
    );
}
 
export default Home;

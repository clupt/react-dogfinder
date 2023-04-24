
/** DogDetails
 *
 *  props: name of dog
 */

function DogDetails ({name, age, src, facts}) {
  console.log("dog details")

  return (
    <div className="DogDetails">
        <div>{name}</div>
    </div>
  )
}

export default DogDetails;
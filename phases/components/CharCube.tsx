
interface Props {
  solution: string;
}

const CharCube: React.FC<Props> = ({ solution }) => {

  return <input type="text" minLength={1} maxLength={1} />
}

export default CharCube
import useQuoter from "../hooks/useRepo";
import ToggleItem from "./ToggleItem";
import GroupList from "./GroupList";

interface Group {
  login: string;
  id: number;
}

const Result = () => {
  const { result, repos } =  useQuoter();

  if (Object.keys(result).length === 0 ) return null

  return (
    <>
      {result.map((group: Group) => (
          <ToggleItem title={group.login} key={group.id}>
            <GroupList repos={repos} />
          </ToggleItem>
      ))}
    </>
  )
}

export default Result
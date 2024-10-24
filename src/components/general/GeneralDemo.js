import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";

const selectOptions = ["default", "latest", "oldest"];

function GeneralDemo() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sort, setSort] = useState(selectOptions[0]);
  const [search, setSearch] = useState("");
  const onButtonClick = () => console.log("button Clicked");

  console.log("GeneralDemo", username, email, sort, search);

  return (
    <div className="GeneralDemo">
      <Input
        label="username"
        type="text"
        value={username}
        setValue={setUsername}
        className="demo-input-with-icon"
        icon={<FontAwesomeIcon icon={faUser} />}
      />
      <Input
        label="email"
        type="text"
        value={email}
        setValue={setEmail}
        className="demo-input-no-icon"
        inputAttributes={{ placeholder: "email@gmail.com" }}
      />
      <SelectInput
        className="demo-select-sort"
        label="Sort"
        value={sort}
        setValue={setSort}
        options={selectOptions}
      />
      <Button
        className="demo-button-login"
        label="Login"
        onClick={onButtonClick}
        icon={<FontAwesomeIcon icon={faRightToBracket} />}
      />
      <br />
      <SearchBar
        title={search}
        setTitle={setSearch}
        inputAttributes={{ placeholder: "Search Movies" }}
      />
    </div>
  );
}

export default GeneralDemo;

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SerchInput = () => {
  return (
    <div>
      <input type="text" placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};

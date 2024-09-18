export function getActions(obj) {
  const actions = [];
  for (const action of obj.special) {
    const { description = "Описание недоступно" } = action;
    action.description = description;
    actions.push(action);
  }

  return actions;
}

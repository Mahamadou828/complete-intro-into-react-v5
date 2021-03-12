export default function updateTheme(theme) {
  return {
    type: 'CHANGE_THEME',
    payload: theme,
  };
}

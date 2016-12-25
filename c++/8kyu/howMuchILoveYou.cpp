std::string how_much_i_love_you(int nb_petals) {
  int petals = nb_petals;
  if (petals == 7){
    petals = 1;
  }
  std::string dayName[] = {"I love you", "a little", "a lot", "passionately", "madly", "not at all"};
  return dayName[petals-1];
}
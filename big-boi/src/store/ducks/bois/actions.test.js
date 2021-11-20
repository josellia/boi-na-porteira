import { addBoi } from "./index";

describe("Bois Action", () => {
  describe("Actions types bois", () => {
    test("deve retornar a action ADD_BOI ", () => {
      expect(addBoi.type).toEqual("ADD_BOI");
    });
  });

  describe("Actions creators bois", () => {
    test("deve retornar a action creator addBoi  ", () => {
      expect(addBoi()).toEqual({ type: "ADD_BOI" });
    });
  });
});

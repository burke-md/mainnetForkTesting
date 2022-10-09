import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sample", function () {
  async function deployFixture() {
    const [owner, user1] = await ethers.getSigners();

    const Sample = await ethers.getContractFactory("Sample");
    const sample = await Sample.deploy();
  
    await sample.deployed();

    return { sample, owner, user1 };
  }

  describe("Subsection one", function () {
    it("", async function () {
      const { sample, owner, user1 } = await loadFixture(
        deployFixture);
  
    });
  });
  describe("Subsection two", function () {
    it("", async function () {
      const { sample, owner, user1 } = await loadFixture(
        deployFixture);
  
    });
  });
});

import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
} from "@nrwl/devkit";

interface Schema {
  name: string;
  directory: string;
}

export default async function (tree: Tree, schema: Schema) {
  const targetPath = joinPathFragments(schema.directory, schema.name);
  generateFiles(
    tree,
    joinPathFragments(__dirname, "./files"),
    targetPath,
    schema
  );
  await formatFiles(tree);
}
